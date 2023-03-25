class MongoContainer{
    constructor(model){
        this.model = model
    }
    async getById(id){
        try{
            const data = await this.model.findById({_id:id})
            return data
        }catch(err){
            console.log(err);
        }
    }
    async getAll(){
        try{
            const data = await this.model.find().lean()
            return data
        }catch(err){
            console.log(err);
        }
    }
    async save(data){
        try{
            const newData = await this.model.create(data)
            return newData
        }catch(err){
            console.log(err);
        }
    }
    async deleteById(id){
        try{
            await this.model.deleteOne({_id:id})
            return {message:"el documento fue borrado"}
        }catch(err){
            console.log(err);
        }
    }
    async deleteAll(){
        try{
            await this.model.deleteMany()
            return {message:"todos los documentos fueron borrados"}

        }catch(err){
            console.log(err);
        }
    }
    async putById(id,modificacion){
        try{
            const data = await this.model.findByIdAndUpdate({_id:id},modificacion)
            const newData = await this.getById(id)
            return newData
        }catch(err){
            console.log(err);
        }
    }
    async findUser(username){
        try {
            const data = await this.model.findOne({email:username})
            return data
        } catch (err) {
            console.log(err)
        }
    }
}



export {MongoContainer}