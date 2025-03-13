export function useSentenceCase(str){
    var firstchar =str.charAt(0);
    var restChars=str.substring(1);
    var sentence=`${firstchar.toUpperCase()}${restChars.toLowerCase()}`
    return sentence;
}