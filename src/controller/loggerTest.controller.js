const tesTer = (req, res) => {
    req.logger.fatal('Error fatal');
    req.logger.error('Error');
    req.logger.warning('Tener Precaucion');
    req.logger.info('Obteniendo data importante');
    req.logger.http('...');
    req.logger.debug('Encontrar error');
    res.json({});
};

module.exports = {
    tesTer,
};