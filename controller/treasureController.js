const haversine = require('haversine-distance')
const catchAsync = require('../utils/catchAsync');
const models = require('../sequelize/models/index');
const { Op } = require('@sequelize/core');

const _fieldValidationFindTreasure = async (input, res) => {
    //check if fields were empty
    if (Object.keys(input).length === 0 || !input.latitude || !input.longitude || !input.distance) {
        res.status(400).json({
            status: 'failed',
            message: "Incomplete fields"
        })  

        return false;
    }
    //check if the type of inputs are number
    if (typeof(input.latitude) !== "number" || typeof(input.longitude)  !== "number" ||  typeof (input.distance) !== "number") {
        res.status(400).json({
            status: 'failed',
            message: "Invalid data type of input"
        }) 
 
        return false;
    }
    //check if the input number is 1 or 10
    const allowedDistance = [1,10];

    if (!allowedDistance.includes(input.distance)) {
        res.status(400).json({
            status: 'failed',
            message: "Please input 1 or 10 only"
        }) 
        
        return false;
    }

    //check if it has prize
    if(input.prize) {

        //check if has decimal places
        if (!Number.isInteger(input.prize)) {
            res.status(400).json({
                status: 'failed',
                message: "No allowed decimal places"
            }) 
            
            return false;
        }

        //check if the input prize is less than 10 or greater than 30
        if (input.prize < 10 || input.prize > 30) {
            res.status(400).json({
                status: 'failed',
                message: "prize should be in between of 10 and 30"
            }) 
        
        return false;
        }

    }
    
    return true;
}

const _fieldValidationCreateMoneyValues = async (input, res) => {
     //check if fields were empty
    if (Object.keys(input).length === 0 || !input.treasure_id || !input.amt) {
        res.status(400).json({
            status: 'failed',
            message: "Incomplete fields"
        })  

        return false;
    }

    //check if the type of inputs are number
    if (typeof(input.treasure_id) !== "number" || typeof(input.amt)  !== "number") {
        res.status(400).json({
            status: 'failed',
            message: "Invalid data type of input"
        }) 

        return false;
    }

    //check if has decimal places
    if (!Number.isInteger(input.amt)) {
        res.status(400).json({
            status: 'failed',
            message: "No allowed decimal places"
        }) 
        
        return false;
    }

    //check if the input prize is less than 10 or greater than 30
    if (input.amt < 10 || input.amt > 30) {
        res.status(400).json({
            status: 'failed',
            message: "prize should be in between of 10 and 30"
        }) 
    
        return false;
    }

    return true;
}

exports.getAllTreasures = catchAsync (async (req, res, next) => {
    const treasures = await models.treasures.findAll(
        {
            include: [
                {
                    association: models.MoneyValues.associations.moneyvalues,
                    model: models.money_values,
                    as: 'moneyvalues',
                }
            ]
        }
    );

    res.status(200).json({
        status: 'success',
        results: treasures.length,
        data: {
            treasures
        }
    })    
})

//return the lowest prize treasure
const _isExistPrize = async (treasure, input) => {
    if (input.prize) {
        treasure.values = treasure.moneyvalues.reduce((prev, curr) => prev.amt < curr.amt ? prev : curr);
        return treasure;
    }
    return treasure;
}

exports.findTreasure = catchAsync (async (req, res, next) => {
    const input = req.body;

    //validation for fields
    const fieldValidation = await _fieldValidationFindTreasure(input, res);
    
    if (fieldValidation) {
        
        const treasures = await models.treasures.findAll(
            {
                include: [
                    {
                        association: models.MoneyValues.associations.moneyvalues,
                        model: models.MoneyValues,
                        as: 'moneyvalues',
                        where: {
                            [Op.or] : {
                                amt : {
                                    [Op.lt] : input.prize ? input.prize: 30
                                }
                            }
                        },   
                    }
                ],
            }
        );
    
        
        const filterTreasures = treasures.filter((treasure) => {
            const pointA = {lat: treasure.latitude, lng: treasure.longitude};
            const pointB = {lat: input.latitude, lng: input.longitude};

            //check if the distance is 1km
            if (input.distance === 1 && Math.round(haversine(pointA, pointB) / 1000) <= 1 ) {
                return _isExistPrize(treasure, input);
            }

            //check if the distance is 10km
            if (input.distance === 10 && (Math.round(haversine(pointA, pointB) / 1000) > 1 && Math.round(haversine(pointA, pointB) / 1000) <= 10) ) {
                return _isExistPrize(treasure, input);
            }
        })


        //filter returned items
        const items = filterTreasures.map((treasure) => {

            return {
                id: treasure.id,
                latitude: treasure.latitude,
                longitude: treasure.longitude,
                name: treasure.name,
                values: input.prize ? {
                    id: treasure.values.id,
                    amt: treasure.values.amt
                }: null
            }
        })

        res.status(200).json({
            status: 'success',
            results: items.length,
            data: items
        })  
    }
})

exports.createTreasure = catchAsync(async (req, res, next) => {
    const input = req.body;

    const fieldValidation = await _fieldValidationCreateMoneyValues(input, res);

    if (fieldValidation) {
        const moneyvalues = await models.MoneyValues.findAll({
            where: {
                treasure_id : input.treasure_id
            }
        })
    
        if (moneyvalues.length > 5) {
            res.status(400).json({
                status: 'failed',
                message: "this treasure exceeds limit of 5 moneytary values"
            }) 
        }
    
        await models.MoneyValues.create(input)
    
        res.status(201).json({
            status: 'success',
            message: "Money Value was added successfully"
        }) 
    }
})

