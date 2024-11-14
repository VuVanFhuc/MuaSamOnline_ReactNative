var express = require("express");
var router = express.Router();

const dienthoai = require("../model/dienthoai");

router.get("/", (rq, rs) => {
   rs.send("Vào API Mobile")
});

router.get("/getListdienthoai", async (rq, rs) => {
   try {
      const data = await dienthoai.find();
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

router.post("/portdienthoai", async (rq, rs) => {
   try {
      const data = rq.body;
      const newdienthoai = new dienthoai({
         hinhanh:data.hinhanh,
         ten:data.ten,
         price:data.price
      });
      const result = await newdienthoai.save();

      rs.status(201).json({
         status: 201,
         messenger: "Crerate dienthoai succesfully",
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

router.get("/getdienthoai/:id", async (req, res) => {
   try {
      const id = req.params.id;
      const dienthoaiDetail = await dienthoai.findById(id);
      res.json(dienthoaiDetail)
   
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
router.delete("/deletedienthoaiByid/:id", async (rq, rs) => {
   try {
     const { id } = rq.params;
     const result = await dienthoai.findByIdAndDelete(id);
 
     if (result) {
       rs.json({
         status: 200,
         messenger: "Delete dienthoai successfully",
         data: result,
       });
     } else {
       rs.status(404).json({
         status: 404,
         messenger: "dienthoai not found",
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
router.put("/updatedienthoaiByid/:id", async (rq, rs) => {
   try {
     const { id } = rq.params;
     const data = rq.body;

     const updatedienthoai= await dienthoai.findByIdAndUpdate(id, data, { new: true });
 
     if (updatedienthoai) {
       rs.json({
         status: 200,
         messenger: "Update dienthoai successfully",
         data: updatedienthoai,
       });
     } else {
       rs.status(404).json({
         status: 404,
         messenger: "dienthoai  not found",
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
      const data = await dienthoai.find({
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