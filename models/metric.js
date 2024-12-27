module.exports = (sequelize, DataTypes) => {
    const Metric = sequelize.define('Metric', {
        date: DataTypes.DATEONLY,
        spins: DataTypes.INTEGER,
        visits: DataTypes.INTEGER
    });
    return Metric;
};
