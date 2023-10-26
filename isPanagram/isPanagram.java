public class isPanagram{
public static boolean isPanagram(String s){
            boolean[] mark=new boolean[26];
            int index=0;
            
            for(int i=0;i<s.length();i++)
            {
                if('A'<=s.charAt(i) && s.charAt(i)<='Z'){
                    index=s.charAt(i)-'A';
                }
                else if('a'<=s.charAt(i) && s.charAt(i)<='z')
                {
                    index=s.charAt(i)-'a';
                }
                else
                {
                    continue;
                }
                mark[index]=true;
            }
     

            for(boolean letterExits:mark){
                if(letterExits==false){
                    return false;
                }
            }
            return true;
        }

  public static void main(String[] args) {
	        
        String s="thequickbrownfoxjumpsoverthelazydog";
        if(isPanagram(s)){
            System.out.print("String "+s+" is Panagram");
        }else{
            System.out.print("String "+s+" is not Panagram");   
      }

}
}