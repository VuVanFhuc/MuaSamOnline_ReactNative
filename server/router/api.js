var express = require("express");
var router = express.Router();

const sanpham = require("../model/sanpham");

router.get("/", (rq, rs) => {
   rs.send("Vào API Mobile")
});

router.get("/getListSanPham", async (rq, rs) => {
   try {
      const data = await sanpham.find();
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

router.post("/portSanPham", async (rq, rs) => {
   try {
      const data = rq.body;
      const newSanPham = new sanpham({
         hinhanh:data.hinhanh,
         ten:data.ten,
         price:data.price
      });
      const result = await newSanPham.save();

      rs.status(201).json({
         status: 201,
         messenger: "Crerate san pham succesfully",
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

router.get("/getSanPham/:id", async (req, res) => {
   try {
      const id = req.params.id;
      const sanphamDetail = await sanpham.findById(id);
      res.json(sanphamDetail)
   
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
router.delete("/deleteSanPhamByid/:id", async (rq, rs) => {
   try {
     const { id } = rq.params;
     const result = await sanpham.findByIdAndDelete(id);
 
     if (result) {
       rs.json({
         status: 200,
         messenger: "Delete san pham successfully",
         data: result,
       });
     } else {
       rs.status(404).json({
         status: 404,
         messenger: "san pham not found",
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
router.put("/updateSanPhamByid/:id", async (rq, rs) => {
   try {
     const { id } = rq.params;
     const data = rq.body;

     const updateSanPham = await sanpham.findByIdAndUpdate(id, data, { new: true });
 
     if (updateSanPham) {
       rs.json({
         status: 200,
         messenger: "Update san pham successfully",
         data: updateSanPham,
       });
     } else {
       rs.status(404).json({
         status: 404,
         messenger: "san pham  not found",
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
      const data = await sanpham.find({
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