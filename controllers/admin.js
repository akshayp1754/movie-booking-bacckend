import { Movies } from '../db/index'

export const Movies = async (req, res) => {
    try {
      const {
        user: { id },
      } = req;
  
      const userId = await User.findById(id);
      if (!userId) {
        return res.status(404).json({
          message: "User not found",
          success: false,
          data: null,
        });
      }
      const { Name, description, genre,  } = req.body;
  
      const newCategory = await Category.create({
        user: id,
        categoryName,
        description,
        value,
      });
      console.log(newCategory);
      return res.status(201).json({
        message: "new category created successfully",
        success: true,
        data: newCategory,
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        message: error.message,
        success: false,
        data: null,
      });
    }
  };