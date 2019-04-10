var Product = require('../models/product');

var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/Foodies', {useNewUrlParser: true });

var products = [new Product({
    imagePath:'https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    title:'Franky',
    description:'Delicious Food',
    price: 20
}),
new Product({
    imagePath:'https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    title:'Franky',
    description:'Delicious Food',
    price: 30
}),
new Product({
    imagePath:'https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    title:'Franky',
    description:'Delicious Food',
    price: 40
}),
new Product({
    imagePath:'https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    title:'Franky',
    description:'Delicious Food',
    price: 50
}),
new Product({
    imagePath:'https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    title:'Franky',
    description:'Delicious Food',
    price: 60
}),
new Product({
    imagePath:'https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    title:'Franky',
    description:'Delicious Food',
    price: 70
})
];

var done=0;
for (var i=0;i<products.length;i++){
    products[i].save(function(err,result){
        done++;
        if(done===products.length){
            exit();
        }
    });
}
function exit(){
    mongoose.disconnect();
}