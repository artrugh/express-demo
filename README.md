EXPRESS-DEMO

creating a RESTFul API from scratch using NODE EXPRESS

mkdir express-demo
cd express-demo
npm init --yes
npm i express

touch index.js


EXPRESS
https://expressjs.com/
express is a function and provides request methods 

/ .get .post .add .delete

each method have two argument 
app.get ("path", callbackFuntion(req , res) => 
res has different properties like res.body res.params res.cookies res.send
)


NODEMON node monitor
instead of runing the app using node, we use nodemon

npm i nodemon