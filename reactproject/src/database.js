const	{createPool}= require('mysql')

const pool= createPool({
	host:"localhost",
	user:"postgres",
	password:"123456",
	ConnectionLimit:10

})

pool.query('select * from public.Customer' , (err,res)=>{

	return console.log(res)
})