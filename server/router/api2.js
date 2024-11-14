var express = require("express");
var router = express.Router();

const giadung = require("../model/giadung");

router.get("/", (rq, rs) => {
   rs.send("Vào API Mobile")
});

router.get("/getListgiadung", async (rq, rs) => {
   try {
      const data = await giadung.find();
      rs.send(data);
   } catch (error) {
      console.log(error);
      rs.status(500).json({
         status: 500,
         messenger: "Internal Server Error",
         data: [],

      })
   }
});

router.post("/portgiadung", async (rq, rs) => {
   try {
      const data = rq.body;
      const newgiadung = new giadung({
         hinhanh:data.hinhanh,
         ten:data.ten,
         price:data.price
      });
      const result = await newgiadung.save();

      rs.status(201).json({
         status: 201,
         messenger: "Crerate giadung succesfully",
         data: result,
      })
   } catch (error) {
      console.log(error);
      rs.status(500).json({
         status: 500,
         messenger: "Internal server Error",
         data: [],
      })
   }
});

router.get("/getgiadung/:id", async (req, res) => {
   try {
      const id = req.params.id;
      const giadungDetail = await giadung.findById(id);
      res.json(giadungDetail)
   
   } catch (error) {
      console.log(error);
      res.status(500).json({
         status: 500,
         message: "Lỗi máy chủ nội bộ"+error.message,
         data: null
      });
   }
});
// Xóa một sản phẩm giày dựa trên ID
router.delete("/deletegiadungByid/:id", async (rq, rs) => {
   try {
     const { id } = rq.params;
     const result = await giadung.findByIdAndDelete(id);
 
     if (result) {
       rs.json({
         status: 200,
         messenger: "Delete giadung successfully",
         data: result,
       });
     } else {
       rs.status(404).json({
         status: 404,
         messenger: "giadung not found",
         data: [],
       });
     }
   } catch (error) {
     console.log(error);
     rs.status(500).json({
       status: 500,
       messenger: "Internal Server Error",
       data: [],
     });
   }
 });

 // Cập nhật thông tin một sản phẩm giày dựa trên ID
router.put("/updategiadungByid/:id", async (rq, rs) => {
   try {
     const { id } = rq.params;
     const data = rq.body;

     const updategiadung= await giadung.findByIdAndUpdate(id, data, { new: true });
 
     if (updategiadung) {
       rs.json({
         status: 200,
         messenger: "Update giadung successfully",
         data: updategiadung,
       });
     } else {
       rs.status(404).json({
         status: 404,
         messenger: "giadung  not found",
         data: [],
       });
     }
   } catch (error) {
     console.log(error);
     rs.status(500).json({
       status: 500,
       messenger: "Internal Server Error",
       data: [],
     });
   }
 });
// Route để tìm xe theo tên
router.get("/search-shoe", async (req, res) => {
   try {
      const key = req.query.key;
      const data = await giadung.find({
         ten: { $regex: key, $options: "i" },
      }).sort({ createAt: -1 });

      if (data) {
         res.send(data);
      } else {
         res.json({
            status: 400,
            msg: "That bai",
            data: [],
         });
      }
   } catch (error) {
      console.log("router.get  error:", error);
   }
});

module.exports = router;