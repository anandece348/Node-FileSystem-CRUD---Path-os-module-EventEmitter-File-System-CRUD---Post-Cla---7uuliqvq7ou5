const fs = require('fs/promises');

const myFileWriter = async (fileName, fileContent) => {
	// write code here
	// dont chnage function name
	try{
		 
		await fs.writeFile('File.txt',' Hello ');
	}catch(err){
		console.log(err);
	}	
}
myFileWriter();

const myFileReader = async (fileName) => {
	// write code here
	// dont chnage function name
	try{
		const readfile =  await fs.readFile("./File.txt", "utf-8");
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
		await fs.appendFile("./File.txt", " World ");
	}catch(err){
		console.log(err);
	}
}
myFileUpdater();

const myFileDeleter = async (fileName) => {
	// write code here
	// dont chnage function name
	try{
		const deletefile = await fs.unlink("./File.txt");
		console.log(deletefile);
	}catch(err){
		console.log(err);
	}
}
myFileDeleter();



module.exports = { myFileWriter, myFileUpdater, myFileReader, myFileDeleter }