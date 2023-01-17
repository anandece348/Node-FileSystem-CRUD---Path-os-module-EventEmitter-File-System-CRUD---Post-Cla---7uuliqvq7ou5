const fs = require('fs/promises');
// console.log(fs);
  
const myFileWriter = async (fileName, fileContent) => {
	// write code here
	// dont chnage function name
	// let fileName = "./myFileWriter.txt";
	// const fileContent = "Hello my name is anand sahu";
	try{
		 
		await fs.writeFile("./myFileWriter.txt", "Hello My name is Anand Sahu");
	}catch(err){
		console.log(err);
	}
	 

	
}
myFileWriter();

const myFileReader = async (fileName) => {
	// write code here
	// dont chnage function name
	try{
		const readfile =  await fs.readFile("./myFileWriter.txt", "utf-8");
		console.log(readfile);
	}catch(err){
		console.log(err);
	}

}
myFileReader();

const myFileUpdater = async (fileName, fileContent) => {
	// write code here
	// dont chnage function name
	try{
		await fs.appendFile("./myFileWriter.txt", " I am 22 years old");
	}catch(err){
		console.log(err);
	}
}
myFileUpdater();

const myFileDeleter = async (fileName) => {
	// write code here
	// dont chnage function name
	try{
		const deletefile = await fs.unlink("./myFileWriter.txt");
		console.log(deletefile);
	}catch(err){
		console.log(err);
	}
}
myFileDeleter();



module.exports = { myFileWriter, myFileUpdater, myFileReader, myFileDeleter }