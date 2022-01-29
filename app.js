$(document).ready(function () {
    function newTable() {
      $("#productTable tr").remove();
      if ($("#productTable tbody").length == 0) {
        $("#productTable").append("<tbody></tbody>");
      }
      $("#productTable tbody").append(
        "<tr>" +
          "<th>S.NO</th>" +
          "<th>Stock Name</th>" +
          "<th>Order Qty</th>" +
          "<th>Order Type</th>" +
          "<th>Executed Qty</th>" +
          "<th>Price</th>" +
          "<th>Order Status</th>" +
          "<th>Order Date</th>" +
          "</tr>"
      );
    }
    function productUpdate() {
      if ($("#productname").val() != null && $("#productname").val() != "") {
        productAddToTable();
        formClear();
        $("#productname").focus();
      }
    }
    function productAddToTable() {
      if ($("#productTable tbody").length == 0) {
        $("#productTable").append("<tbody></tbody>");
      }
      $("#productTable tbody").append(
        "<tr>" +
          "<td>" +
          $("#S.NO").val() +
          "</td>" +
          "<td>" +
          $("#Stock Name").val() +
          "</td>" +
          "<td>" +
          $("#Order Qty").val() +
          "</td>" +
          "<td>" +
          $("#Order Type").val() +
          "</td>" +
          "<td>" +
          $("#Executed Qty").val() +
          "</td>" +
          "<td>" +
          $("#Price").val() +
          "</td>" +
          "<td>" +
          $("#Order Status").val() +
          "</td>" +
          "<td>" +
          $("#Order Date").val() +
          "</td>" +
          "</tr>"
      );
    }
  
    function productsAddDbs() {
      newTable();
      $("#productTable tbody").append(
        "<tr>" +
          "<td>1</td>" +
          "<td>DBS</td>" +
          "<td>50</td>" +
          "<td>Limit</td>" +
          "<td>30</td>" +
          "<td>150</td>" +
          "<td>ACCEPTED</td>" +
          "<td>21 Feb 2021</td>" +
          "</tr>"
      );
  
      $("#productTable tbody").append(
        "<tr>" +
          "<td>2</td>" +
          "<td>DBS</td>" +
          "<td>100</td>" +
          "<td>MARKET</td>" +
          "<td>30</td>" +
          "<td>150</td>" +
          "<td>ACCEPTED</td>" +
          "<td>15 Oct 2021</td>" +
          "</tr>"
      );
    }
    function productsAddInfosys() {
      newTable();
     
  
      $("#productTable tbody").append(
        "<tr>" +
          "<td>1</td>" +
          "<td>Infosys</td>" +
          "<td>100</td>" +
          "<td>Limit</td>" +
          "<td>40</td>" +
          "<td>150</td>" +
          "<td>ACCEPTED</td>" +
          "<td>29 Feb 2021</td>" +
          "</tr>"
      );
  
      $("#productTable tbody").append(
        "<tr>" +
          "<td>2</td>" +
          "<td>Infosys</td>" +
          "<td>100</td>" +
          "<td>MARKET</td>" +
          "<td>30</td>" +
          "<td>100</td>" +
          "<td>ACCEPTED</td>" +
          "<td>15 Dec 2021</td>" +
          "</tr>"
      );
    }
    function productsAddTcs() {
      newTable();
  
      $("#productTable tbody").append(
        "<tr>" +
          "<td>1</td>" +
          "<td>TCS</td>" +
          "<td>50</td>" +
          "<td>Limit</td>" +
          "<td>30</td>" +
          "<td>150</td>" +
          "<td>ACCEPTED</td>" +
          "<td>25 Aug 2021</td>" +
          "</tr>"
      );
  
      $("#productTable tbody").append(
        "<tr>" +
          "<td>2</td>" +
          "<td>TCS</td>" +
          "<td>100</td>" +
          "<td>MARKET</td>" +
          "<td>30</td>" +
          "<td>100</td>" +
          "<td>ACCEPTED</td>" +
          "<td>25 Dec 2021</td>" +
          "</tr>"
      );
    }
    $("#host").on("change", function () {
      if ($("#host").val() == "dbs") productsAddDbs();
      else if ($("#host").val() == "infosys") productsAddInfosys();
      else if ($("#host").val() == "tcs") productsAddTcs();
      else if ($("#host").val() == "Select Stocks") newTable();
    });
  });
  