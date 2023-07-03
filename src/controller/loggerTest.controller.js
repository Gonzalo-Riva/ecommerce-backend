const tesTer = (req, res) => {
    req.logger.fatal('Error fatal');
    req.logger.error('Error');
    req.logger.warning('Cuidado');
    req.logger.info('Obteniendo datos importantes');
    req.logger.http('...');
    req.logger.debug('Encontrando error');
    res.json({});
};

module.exports = {
    tesTer,
};