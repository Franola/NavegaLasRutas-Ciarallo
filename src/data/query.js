export const getQuery = (filter) =>{
    return "fields id, name, involved_companies.company.name, release_dates.human, first_release_date, genres.name, summary,cover.image_id, rating; where involved_companies != null & category=0 & cover != null & rating != null"+filter+"; limit 12;"
}