const { valid } = require('joi');
const Joi = require('joi');

const validator = (schema) => (payload) => 
    schema.validate(payload);


const GetMoviesByPageSchema =  Joi.object({
    currentPage : Joi.number().min(1).required(),
    size : Joi.number().min(1).required(),
    search : Joi.string().max(100,'utf8').allow('').required(),
    genre : Joi.string().max(100,'utf8').allow('').required(),
    orderBy : Joi.string().valid("id","Name","Rating").required(),
    orderDir: Joi.string().valid("ASC","DESC").required()
});

exports.validateParamsGetMoviesByPage = validator(GetMoviesByPageSchema);

const GetMovieByUrlSchema = Joi.object({
    t : Joi.string().valid("m").required(),
    v : Joi.string().required()
});

exports.validateParamsGetMovieByUrl = validator(GetMovieByUrlSchema);

const GetShowByUrlSchema = Joi.object({
    t : Joi.string().valid("s").required(),
    v : Joi.string().required()
});

exports.validateParamsGetShowByUrl = validator(GetShowByUrlSchema);

const GetEpisodesByShowSeasonSchema = Joi.object({
    showName : Joi.string().required(),
    season : Joi.number().min(1).required()
});

exports.validateParamsGetEpisodesByShowSeason = validator(GetEpisodesByShowSeasonSchema);

const PostMovieSchema = Joi.object({
    Name : Joi.string().required(),
    Desc : Joi.string().required(),
    Genre : Joi.string().required(),
    Rating : Joi.number().min(0).required(),
    Thumbnail : Joi.string().required(),
    Video : Joi.string().required()
});

exports.validateParamsPostMovie = validator(PostMovieSchema);

const PostShowSchema = Joi.object({
    Name : Joi.string().required(),
    Desc : Joi.string().required(),
    Genre : Joi.string().required(),
    Rating : Joi.number().min(0).required(),
    Thumbnail : Joi.string().required()
});

exports.validateParamsPostShow = validator(PostShowSchema);