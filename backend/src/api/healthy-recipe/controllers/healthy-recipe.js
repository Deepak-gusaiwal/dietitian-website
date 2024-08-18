'use strict';

/**
 * healthy-recipe controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::healthy-recipe.healthy-recipe');
