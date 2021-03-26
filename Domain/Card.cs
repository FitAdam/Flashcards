namespace Domain
{
    public class Card
    {
        public int ID { get; set; }
        public string TypeID { get; set; }
        public string Front { get; set; }
        public string Back { get; set; }
        public bool IsCompleted { get; set; }
    }
}
