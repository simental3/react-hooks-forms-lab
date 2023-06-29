import React, { useState } from "react";
import { v4 as uuid } from "uuid";

// function ItemForm({ onItemFormSubmit }) {
//   const [name, setName] = useState("")
//   const [category, setCategory] = useState("Produce")

//   function handleNameChange(event) {
//     setName(event.target.value)
//   }

//   function handleCategoryChange(event) {
//     setCategory(event.target.value)
//   }

//   const handleSubmit = (e) => {
//     e.preventDefault()

//     let newItem = {
//       id: uuid()
//       category,
//       name,
//     }
//     onItemFormSubmit(newItem)
//     setName("")
//     setCategory("Produce")
//   }

//   return (
//     <form
//       className="NewItem"
//       onSubmit={handleSubmit}
//     >
//       <label>
//         Name:
//         <input
//           type="text"
//           name="name"
//           value={name}
//           onChange={handleNameChange}
//           // onChange={(e) => setName(e.target.value)}
//         />
//       </label>

//       <label>
//         Category:
//         <select
//           name="category"
//           value={category}
//           onChange={handleCategoryChange}
//           // onChange={(e) => setCategory(e.target.value)}
//         >
//           <option value="Produce">Produce</option>
//           <option value="Dairy">Dairy</option>
//           <option value="Dessert">Dessert</option>
//         </select>
//       </label>

//       <button type="submit">Add to List</button>
//     </form>
//   );
// }

// export default ItemForm;



const initialState = {
  name: "",
  category: "Produce",
}

function ItemForm({ onItemFormSubmit }) {
  const [formData, setFormData] = useState(initialState)
  // const [formData, setFormData] = useState({
  //   name: "",
  //   category: "Produce",
  // })

  const { name, category } = formData

  function handleChange(e) {
    const { name, value } = e.target

    setFormData((formData) => ({
      ...formData,
      [name]: value,
      // [e.target.name]: e.target.value,
    }))
  }

  function handleSubmit(e) {
    e.preventDefault()

    onItemFormSubmit({
      id: uuid(),
      ...formData
    })
    setFormData(initialState)
    // setFormData({
    //   name: "",
    //   category: "Produce",
    // })
  }

  return (
    <form
      className="NewItem"
      onSubmit={handleSubmit}
    >
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
        />
      </label>

      <label>
        Category:
        <select
          name="category"
          value={category}
          onChange={handleChange}
        >
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;









// import React from "react";
// import { v4 as uuid } from "uuid";

// function ItemForm(props) {
//   return (
//     <form className="NewItem">
//       <label>
//         Name:
//         <input type="text" name="name" />
//       </label>

//       <label>
//         Category:
//         <select name="category">
//           <option value="Produce">Produce</option>
//           <option value="Dairy">Dairy</option>
//           <option value="Dessert">Dessert</option>
//         </select>
//       </label>

//       <button type="submit">Add to List</button>
//     </form>
//   );
// }

// export default ItemForm;
