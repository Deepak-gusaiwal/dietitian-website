'use strict';

/**
 * healthy-recipe service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::healthy-recipe.healthy-recipe');
