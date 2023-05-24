const adminPermission = async (req, res, next) => {
    if (req.user.role !== 'admin' && req.user.role !== 'premium') {
        return res.status(401).json({
            status: 'error',
            msg: 'Usuario no autorizado ',
        });
    }
    next();
};

const userPermission = async (req, res, next) => {
    console.log(req.session.user);
    if (!req.session.user || req.session?.user?.role !== 'user') {
        return res.status(401).json({
            status: 'error',
            msg: 'Usuario no autorizado',
        });
    }
    next();
};
const premiumPermission = async (req, res, next) => {
    if (req.user.role !== 'admin' || req.user.role !== 'premium') {
        return res.status(401).json({
            status: 'error',
            msg: 'Usuario no autorizado ',
        });
    }
    next();
};

module.exports = {
    adminPermission,
    userPermission,
    premiumPermission,
};