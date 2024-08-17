import productModel from "../model/products.js"
export const getProducts=async (req,res)=>{
    /*this is for if u have more than one categories*/
    //REQ.QUERY FOR searching like i want record of company=apple

    // const myproducts=await productModel.find(req.query);  
    // res.status(200).json({myproducts});
    // console.log(req.query)

/*for company=apple if 'company=apple&asn=dsjds' then it return all records*/
// company=apple-- IT IS VALID FOR company category not for all

      const {company,featured,name,sort,select}=req.query;
      const queryobject={}
      if (company)
      {
        queryobject.company=company;
        console.log(req.query);

      }
      if (featured)
      {
        queryobject.featured=featured;
        console.log(req.query);
      }



      if (name)
      {
        queryobject.name={$regex:name,$options:'i'}
      }


      let apidata=productModel.find(queryobject);
      //for sorting if user use sort method in url then it execute this else execute all records
      if(sort)              
      {
        let sortquery=sort.split(",").join(" ");
        apidata=apidata.sort(sortquery)
      }

//for slicing the columns
      if(select)              
        {
          let selectquery=select.split(",").join(" ");
          apidata=apidata.select(selectquery);
        }
    console.log(queryobject);

    let page=Number(req.query.page) || 1;
    let limit=Number(req.query.limit) || 3;
    let skip=(page-1)*limit;
    apidata=apidata.skip(skip).limit(limit);
    const myproducts=await apidata; 
    res.status(200).json({"nbhits":myproducts.length,myproducts});
    


// general purpose
    // const myproducts=await productModel.find(queryobject); 
    // res.status(200).json({myproducts});
  

};

export const getProductsTesting=async (req,res)=>{
    // const myproducts=await productModel.find(req.query).sort("price");  //for sorting use sort()--for descending sort("-price")
    // const myproducts=await productModel.find(req.query).sort("-company");   //sorting using compamy name
   
    // const myproducts=await productModel.find(req.query).sort("price");  
    // res.status(200).json({myproducts});
    // console.log(req.query)

    const myproducts=await productModel.find(req.query).select("company name");  
    res.status(200).json({myproducts});
    console.log(req.query)
}