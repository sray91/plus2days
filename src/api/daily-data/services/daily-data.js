'use strict';

/**
 * daily-data service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::daily-data.daily-data');
