const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const path = require("path");
const wingRoutes = require("./routes/WingRoute");
const unitType = require("./routes/UnitTypeRoute");
const BoardMembersRoutes = require("./routes/BoardMembersRoutes");
const MemberRoutes = require("./routes/MemberRoutes");
const AccountRoutes = require("./routes/AccountRoutes");
const AccountGroupRoutes = require("./routes/AccountGroupRoutes");
const AccountSubGroupRoute = require("./routes/AccountSubGroupRoute");
const VoucherRoute = require("./routes/VoucherRoutes");
const VoucherDetailRoutes = require("./routes/VoucherDetailRoutes");
const ServiceRoute = require("./routes/ServiceRoute");
const InvoiceHeaderRoute = require("./routes/InvoiceHeaderRoute");
const InvoiceDetailRoute = require("./routes/InvoiceDetailRoute");
const ParkingRoute = require("./routes/ParkingRoute");
const OrganisationRoutes = require("./routes/OrganisationRoutes");
const meetingRoutes = require('./routes/MeetingRoutes');
const PropertyRoute = require("./routes/PropertyRoutes");




mongoose.connect("mongodb://127.0.0.1:27017/accounting", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", error));

const PORT = process.env.PORT || 8001;

//console.log(port); 

dotenv.config();
const app = express();

app.use(express.json());
app.use(cors());

app.use("/Parking", ParkingRoute);

app.use("/InvoiceDetail", InvoiceDetailRoute);

app.use("/InvoiceHeader", InvoiceHeaderRoute);

app.use("/VoucherDetail", VoucherDetailRoutes);

app.use("/Voucher", VoucherRoute);

app.use("/AccountSubGroup", AccountSubGroupRoute);

app.use("/AccountGroup", AccountGroupRoutes);

app.use("/Account", AccountRoutes);

app.use("/Member", MemberRoutes);

app.use("/BoardMembers", BoardMembersRoutes);

app.use("/wings", wingRoutes);

app.use("/unitType", unitType);

app.use("/Service", ServiceRoute);

app.use("/Organisation", OrganisationRoutes);

app.use('/Meeting', meetingRoutes);

app.use("/Property",PropertyRoute);

app.use("/Uploads", express.static(path.join(__dirname, "Uploads")));



app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});