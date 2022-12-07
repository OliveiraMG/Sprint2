var database = require("../database/config");

function buscarUltimasMedidas(idSensor, limite_linhas, tipo) {

    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = `select top ${limite_linhas}
        metrica.${tipo}Atual, DATE_FORMAT(metrica.dtHora, '%H:%i:%s') as hora,
        sensor.idSensor FROM metrica join sensor on metrica.fkSensor=sensor.idSensor where idSensor = ${idSensor} 
        order by idMetrica desc`;


    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `select metrica.${tipo}Atual, DATE_FORMAT(metrica.dtHora, '%H:%i:%s') as hora,
        sensor.idSensor FROM metrica join sensor on metrica.fkSensor=sensor.idSensor where idSensor = ${idSensor} 
        order by idMetrica desc limit ${limite_linhas};`;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}


function metricas() {

    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = `select metrica.temperaturaAtual , metrica.umidadeAtual,
        sensor.idSensor FROM metrica join sensor on metrica.fkSensor=sensor.idSensor;`;


    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `select sensor.idSensor, metrica.temperaturaAtual , metrica.umidadeAtual
        FROM metrica join sensor on metrica.fkSensor=sensor.idSensor;`;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}



function buscarMedidasEmTempoReal(idSensor) {

    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = `select metrica.temperaturaAtual , metrica.umidadeAtual,
        sensor.idSensor FROM metrica join sensor on metrica.fkSensor=sensor.idSensor;`;

    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `        select metrica.temperaturaAtual , metrica.umidadeAtual,
        sensor.idSensor FROM metrica join sensor on metrica.fkSensor=sensor.idSensor;`;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}


module.exports = {
    buscarUltimasMedidas,
    buscarMedidasEmTempoReal,
    metricas
}
