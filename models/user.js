module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        verified: DataTypes.BOOLEAN,
        spin_count: DataTypes.INTEGER,
        page_visit_count: DataTypes.INTEGER,
        spin_click_count: DataTypes.INTEGER
    });
    return User;
};
