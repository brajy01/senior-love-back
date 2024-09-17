# Table Profile Write to Profile 

ProfileWriteToProfile.init({
    authorProfileId: {
        type: DataTypes.INTEGER,
        references: {
            model: Profile,
            key: "id",
        },
        allowNull: false,
    },
    targetProfileId: {
        type: DataTypes.INTEGER,
        references: {
            model: Profile,
            key: "id",
        },
        allowNull: false,
    },
    content: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    status: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
    },
}, {
    sequelize,
    tableName: "profile_write_to_profile",
    indexes: [
        {
            unique: true,
            fields: ["authorProfileId", "targetProfileId"],
        }
    ],
});


# Configurer les associations Sequelize 

// Dans le modèle Profile
Profile.hasMany(ProfileWriteToProfile, { 
    foreignKey: 'authorProfileId', 
    as: 'WrittenBy' // Alias pour utiliser dans les requêtes
});

Profile.hasMany(ProfileWriteToProfile, { 
    foreignKey: 'targetProfileId', 
    as: 'WritesTo' // Alias pour utiliser dans les requêtes
});

// Dans le modèle ProfileWriteToProfile
ProfileWriteToProfile.belongsTo(Profile, { 
    foreignKey: 'authorProfileId', 
    as: 'Author' // Alias pour utiliser dans les requêtes
});

ProfileWriteToProfile.belongsTo(Profile, { 
    foreignKey: 'targetProfileId', 
    as: 'Target' // Alias pour utiliser dans les requêtes
});


## Tests d'utilisation des associations 

const profileId = 1; // ID du profil d'auteur

Profile.findByPk(profileId, {
    include: [
        {
            model: ProfileWriteToProfile,
            as: 'WritesTo',
            include: [
                {
                    model: Profile,
                    as: 'Author'
                }
            ]
        }
    ]
}).then(profile => {
    console.log(profile);
});

Profile.findByPk(profileId, {
    include: [
        {
            model: ProfileWriteToProfile,
            as: 'WrittenBy',
            include: [
                {
                    model: Profile,
                    as: 'Target'
                }
            ]
        }
    ]
}).then(profile => {
    console.log(profile);
});
