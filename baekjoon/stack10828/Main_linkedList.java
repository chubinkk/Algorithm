package stack10828;

import java.util.*;

public class Main_linkedList {
	static int capacity, data, top;
	static int[] stack = new int[1000000];
	
	public static void push(int n) { //스택에 자료 넣기
		stack[top] = n;
		top++;
	}
	
	public static int pop(){ //스택에서 자료를 빼기 //문제 있음
		if(empty())
			return stack[--top];
		else
			return top;		
	}
	
	public static int top(){ //스택의 가장 위에 있는 자료 보기,문제 있음. exception만들기
		data = stack[top-1];
		return data;
	}
	
	public static boolean empty() { //스택이 비었는지 안비었는지. 문제 있음
		if(top > 0) //스택 비었
			return true; //
		else	//안비었
			return false; //0
	}
	
	public static int size() { //스택에 저장된 자료의 개수 알아보기
		return top;
	}
	
	public static void main(String[] args) throws Exception{
		
	}
}
