var express = require("express");
var router = express.Router();

const thucpham = require("../model/thucpham");

router.get("/", (rq, rs) => {
   rs.send("Vào API Mobile")
});

router.get("/getListthucpham", async (rq, rs) => {
   try {
      const data = await thucpham.find();
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

router.post("/portthucpham", async (rq, rs) => {
   try {
      const data = rq.body;
      const newthucpham = new thucpham({
         hinhanh:data.hinhanh,
         ten:data.ten,
         price:data.price
      });
      const result = await newthucpham.save();

      rs.status(201).json({
         status: 201,
         messenger: "Crerate thucpham succesfully",
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

router.get("/getthucpham/:id", async (req, res) => {
   try {
      const id = req.params.id;
      const thucphamDetail = await thucpham.findById(id);
      res.json(thucphamDetail)
   
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
router.delete("/deletethucphamByid/:id", async (rq, rs) => {
   try {
     const { id } = rq.params;
     const result = await thucpham.findByIdAndDelete(id);
 
     if (result) {
       rs.json({
         status: 200,
         messenger: "Delete thucpham successfully",
         data: result,
       });
     } else {
       rs.status(404).json({
         status: 404,
         messenger: "thucpham not found",
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
router.put("/updatethucphamByid/:id", async (rq, rs) => {
   try {
     const { id } = rq.params;
     const data = rq.body;

     const updatethucpham= await thucpham.findByIdAndUpdate(id, data, { new: true });
 
     if (updatethucpham) {
       rs.json({
         status: 200,
         messenger: "Update thucpham successfully",
         data: updatethucpham,
       });
     } else {
       rs.status(404).json({
         status: 404,
         messenger: "thucpham  not found",
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
      const data = await thucpham.find({
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