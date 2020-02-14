module.exports={
    get_houses: (req, res, next) => {
        const dbInstance = req.app.get('db');
    
        dbInstance.get_house()
          .then(house => res.status(200).send(house))
          .catch(err => {
            res.status(500).send({ errorMessage: "Oops! Something went wrong. Our engineers have been informed!" });
            console.log(err)
          });
      },
      add_house: (req, res, next) => {
        const dbInstance = req.app.get('db');
        const { name, address, city, state, zipcode,imgurl,monthly_mortgage, mounthly_rent } = req.body;
    
        dbInstance.add_house([name, address, city, state, zipcode,imgurl,monthly_mortgage, mounthly_rent])
          .then(() => res.sendStatus(200))
          .catch(err => {
            res.status(500).send({ errorMessage: "Oops! Something went wrong. Our engineers have been informed!" });
            console.log(err)
          });
      },
      delete_house: (req, res, next) => {
        const dbInstance = req.app.get('db');
        const { id } = req.params;
    
        dbInstance.delete_house(id)
          .then(() => res.sendStatus(200))
          .catch(err => {
            res.status(500).send({ errorMessage: "Oops! Something went wrong. Our engineers have been informed!" });
            console.log(err)
          });
      }
    

}