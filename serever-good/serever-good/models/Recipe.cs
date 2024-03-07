namespace serever_good.models
{
    public enum DifficultyLevel
    {
        veryEasy=1,
        easy=2,
        normal=3,
        hard=4,
        veryHard=5
    }
    public class Recipe
    {
        //קוד מתכון, שם מתכון, קוד קטגוריה, זמן הכנה בדקות, דרגת קושי 1-5 , תאריך הוספת המתכון לאתר,
        //רשימת הרכיבים (אוסף מחרוזות), אופן ההכנה (אוסף מחרוזות),
        //קוד משתמש שהכניס את המתכון, תמונה (מחרוזת של ניתוב).
        public int Id{ get; set; }
        public string Name { get; set; }
        public Catgory Catgory { get; set; }//????
        public int Minutes { get; set; }
        public DifficultyLevel DifficultyLevel { get; set; }
        public DateTime DateAdd { get; set; }
        public List<Component> ComponentList { get; set; }
        public List<Preparation> PreparationList { get; set; }
        public User User{ get; set; }
        public string ImgRouting { get; set; }


    }
}
