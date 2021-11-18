import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getAllCategories } from "../../actions/CategoryActions";
import { createProduct, updateProduct } from "../../actions/ProductActions";
import { FetchImage } from "../../api/APICore";
import store from "../../store";

const EditProduct = ({ setProduct, productDetails }) => {
  const [categories, setCategories] = useState([]);
  const [images, setImages] = useState([]);
  const [imagesForUpload, setImagesForUpload] = useState([]);
  const [product, setProductDetails] = useState({
    onSale: false,
    quantityType: "",
    categoryId: "",
    features: [],
  });
  useEffect(() => {
    console.log(productDetails);
    if (productDetails) {
      if (Object.keys(productDetails).length !== 0)
        setProductDetails({
          productId: productDetails._id,
          name: productDetails.name,
          description: productDetails.description,
          amount: productDetails.amount,
          quantityType: productDetails.quantityType,
          quantity: productDetails.quantity,
          onSale: productDetails.onSale,
          tags: productDetails.tags,
          features: productDetails.features,
          categoryId: productDetails.category
            ? productDetails.category._id
            : "",
        });
    }
    if (productDetails && productDetails.images) {
      if (productDetails.images.length > 0) {
        const SetTheFetchedImage = async () => {
          for (const eachimage of productDetails.images) {
            var data = await FetchImage(eachimage);
            setImages((pre) => [...pre, data]);
          }
        };
        SetTheFetchedImage();
      }
    }
  }, [productDetails]);
  const onChange = (e) => {
    setProductDetails({ ...product, [e.target.name]: e.target.value });
  };

  const onTagsChange = (e) => {
    let tagsString = e.target.value;
    const allTags = tagsString.split(", ");
    let tags = [];
    for (const tag of allTags) tags.push(tag.trim());
    setProductDetails({ ...product, tags: tags });
  };
  let category = store.getState().category;
  const dispatch = useDispatch();
  store.subscribe(() => {
    category = store.getState().category;
    if (category.categories) {
      setCategories(category.categories);
    }
  });
  useEffect(() => {
    setCategories(category.categories);
    if (category.categories && category.categories.length === 0)
      dispatch(getAllCategories());
  }, []);
  const AddFile = (e) => {
    var file = e.target.files[0];
    setImages((pre) => [...pre, file]);
    setImagesForUpload((pre) => [...pre, file]);
  };
  const saveProduct = (e) => {
    e.preventDefault();
    let formData = new FormData();
    console.log(product);
    for (const key of Object.keys(product)) {
      let value = product[key];
      if (key === "tags") {
        formData.append("productTags", JSON.stringify(value));
      } else if (key === "features") {
        formData.append("productFeatures", JSON.stringify(value));
      } else formData.append(key, value);
    }
    for (const media of imagesForUpload) {
      formData.append("media", media);
    }
    if (product.productId) dispatch(updateProduct(formData));
    else dispatch(createProduct(formData));
  };
  return (
    <div className="ui equal width form">
      <button
        className="btn btn-orange mb-4 btn-block"
        onClick={() => setProduct(null)}
      >
        Back
      </button>
      <div className="field">
        <h5 className="mb-3"> Product Name</h5>

        <input
          type="text"
          name="name"
          value={product && product.name}
          onChange={onChange}
        />
      </div>
      <div className="field">
        <h5 className="mb-3"> Description</h5>

        <textarea
          rows={4}
          name="description"
          value={product && product.description}
          onChange={onChange}
        />
      </div>
      <div className="fields">
        <div className="field">
          <h5 className="mb-3"> Amount (In Rs.)</h5>

          <input
            type="number"
            name="amount"
            min={0}
            pattern="\d+"
            value={product && product.amount}
            onChange={onChange}
          />
        </div>
        <div className="field">
          <h5 className="mb-3"> Category</h5>

          <span className="custom-dropdown">
            <select
              name="categoryId"
              value={product && product.categoryId}
              onChange={onChange}
            >
              <option value="">Select</option>
              {categories.map((category, index) => {
                return (
                  <option value={category._id} key={index}>
                    {category.title}
                  </option>
                );
              })}
            </select>
          </span>
        </div>
      </div>
      <div className="fields">
        <div className="field">
          <h5 className="mb-3"> Quantity</h5>

          <input
            type="number"
            name="quantity"
            min={0}
            pattern="\d+"
            value={product && product.quantity}
            onChange={onChange}
          />
        </div>
        <div className="field">
          <h5 className="mb-3"> Quantity Type</h5>

          <span className="custom-dropdown">
            <select
              name="quantityType"
              value={product && product.quantityType}
              onChange={onChange}
            >
              <option value="">Items</option>

              <option value="Kgs">Kgs</option>

              <option value="Lts">Lts</option>
            </select>
          </span>
        </div>
      </div>
      <div className="fields">
        <div className="field">
          <h5 className="mb-3"> On Sale</h5>

          <span className="custom-dropdown">
            <select
              name="onSale"
              value={product && product.onSale}
              onChange={onChange}
            >
              <option value="false">No</option>
              <option value="true">Yes</option>
            </select>
          </span>
        </div>
        <div className="field">
          <h5 className="mb-3"> Tags</h5>
          <input
            type="text"
            name="tags"
            value={product && product.tags && product.tags.join(", ")}
            onChange={onTagsChange}
          />
        </div>
      </div>
      <div className="fields">
        <div className="field">
          <h5 className="mb-3">
            {" "}
            Features
            <i
              className="fas fa-plus-circle feature-input mt-0 mr-5 pr-5 float-right"
              onClick={(e) => {
                let features = product.features;
                features.push("");
                setProductDetails({
                  ...product,
                  features: features,
                });
              }}
            ></i>
          </h5>
          {product &&
            product.features &&
            product.features.map((feature, index) => {
              return (
                <>
                  <input
                    type="text"
                    className="mb-2 feature-input"
                    key={index}
                    value={feature}
                    onChange={(e) => {
                      let features = product.features;
                      features[index] = e.target.value;
                      setProductDetails({
                        ...product,
                        features: features,
                      });
                    }}
                  />
                  <i
                    className="fas fa-trash feature-input mt-2"
                    onClick={(e) => {
                      let features = product.features;
                      features.splice(index, 1);
                      setProductDetails({
                        ...product,
                        features: features,
                      });
                    }}
                  ></i>
                </>
              );
            })}
        </div>
      </div>
      <div className="fields">
        <div className="field">
          <h5 className="mb-3">
            {" "}
            Images
            <div className="wrapper">
              <input type="file" id="file-input" onChange={AddFile} />
              <label for="file-input">
                <i className="fa fa-paperclip feature-input fa-2x"></i>
                <span></span>
              </label>
            </div>
          </h5>
          <div className="row">
            {images.map((image, index) => {
              return (
                <div className="img-product col-6 col-lg-6 col-sm-12">
                  <img
                    src={URL.createObjectURL(image)}
                    alt="Product"
                    className="product-img-fluid"
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <button className="btn btn-orange btn-block" onClick={saveProduct}>
        Save
      </button>
    </div>
  );
};

export default EditProduct;
