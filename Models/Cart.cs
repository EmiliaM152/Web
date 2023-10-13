using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EMedicineBE.Models
{
    public class Cart
    {
        public int ID { get; set; }
        public int UserId { get; set; }
        public decimal UnitPrice { get; set; }
        public decimal Discount { get; set; }
        public int Quiantity { get; set; }
        public decimal TotalPrice{ get; set; }
        public int MedicineID { get; set; }




    }
}
