const mysql = require('mysql')

class CarroD3{
   
    static connect(){
        const connection = mysql.createConnection({
            host:"localhost",
            user:"rost",
            password:"",
            database:"auto"
        })
        connection;this.connect()
        return connection
    }
    //realiza uma consulta no BD
    static getCarros(callback){
        let connection  = CarroDB.connect
        let sql = "select * from carro"
        let query =  connection.query(sql,function(err,results,fields){
            if(err) throw err
            callback(results)
        })
        console.log(query.sql)
        connection.end()
    }
    //realiza consulta pelo tipo 
    static getCarrosTipo(tipo, callback){
        let connection = CarroDB.connect
        let sql = "select * from carro whare tipo = " + tipo + ""
        let query = connection(sql, function(err,results,fields){
            if(err) throw err
            callback(results)

        })
        console.log(query.sql)
        connection.end()
    }
    //salvar no BD
    //salva dados no banco
    static save(carro,callback){
        const connection = carroDB.connect()
        let sql = "insert into carro set ?"
        let query = connection;query(sql,carro, function(err,results,fields){
            if(err) throw err
            carro.id = results.insertId
            //restorna pela funcao callback
            callback(carro)

        })
        console.logg(query.sql)
        connection.end()
    }
    //atualiza registro do banco de dados
    static update(carro, callback){
        const connection = carroBD.connect()
        let sql =  "update carro set ? whare id = ?"
        let id = carro.id
        let query = connect.query(sql,[carro,id], function(err,results,fields){
            if(err) throw err
            callback(carro)
        })
        console.log(query.sql)
        connection.end()

    }
    static delete(carro, callback){
        const connection = carroBD.connect()
        let sql =  "delete from carro whare id = ?"
        let query = connect.query(sql,id, function(err,results,fields){
            if(err) throw err
            callback(carro)
        })
        console.log(query.sql)
        connection.end()

    }