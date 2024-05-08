var express = require("express");
var router = express.Router();

const thoitrang = require("../model/thoitrang");

router.get("/", (rq, rs) => {
   rs.send("Vào API Mobile")
});

router.get("/getListthoitrang", async (rq, rs) => {
   try {
      const data = await thoitrang.find();
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

router.post("/portthoitrang", async (rq, rs) => {
   try {
      const data = rq.body;
      const newthoitrang = new thoitrang({
         hinhanh:data.hinhanh,
         ten:data.ten,
         price:data.price
      });
      const result = await newthoitrang.save();

      rs.status(201).json({
         status: 201,
         messenger: "Crerate thoitrang succesfully",
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

router.get("/getthoitrang/:id", async (req, res) => {
   try {
      const id = req.params.id;
      const thoitrangDetail = await thoitrang.findById(id);
      res.json(thoitrangDetail)
   
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
router.delete("/deletethoitrangByid/:id", async (rq, rs) => {
   try {
     const { id } = rq.params;
     const result = await thoitrang.findByIdAndDelete(id);
 
     if (result) {
       rs.json({
         status: 200,
         messenger: "Delete thoitrang successfully",
         data: result,
       });
     } else {
       rs.status(404).json({
         status: 404,
         messenger: "thoitrang not found",
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
router.put("/updatethoitrangByid/:id", async (rq, rs) => {
   try {
     const { id } = rq.params;
     const data = rq.body;

     const updatethoitrang= await thoitrang.findByIdAndUpdate(id, data, { new: true });
 
     if (updatethoitrang) {
       rs.json({
         status: 200,
         messenger: "Update thoitrang successfully",
         data: updatethoitrang,
       });
     } else {
       rs.status(404).json({
         status: 404,
         messenger: "thoitrang  not found",
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
      const data = await thoitrang.find({
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