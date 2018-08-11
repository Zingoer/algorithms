package com.company.ArraysAndStrings;

import java.lang.reflect.Array;
import java.util.Iterator;

@SuppressWarnings("unchecked")
public class AdjustableStack<T> {

    private T[] array;
    private int N;
    private Class<T> c;

    public static void main(String[] args){
        AdjustableStack array = new AdjustableStack(Integer.class);
        array.push(1);
        array.push(2);
        array.push(3);
        System.out.print(array.toString());
        System.out.print(array.size());
        array.pop();
        array.pop();
        String item = array.pop().toString();
        System.out.print(item);
        System.out.print(array.toString());
        System.out.print(array.size());
    }


    public boolean isEmpty(){
        return N == 0;
    }

    public int size(){
        return N;
    }

    public AdjustableStack(Class<T> c) {
        this(c, 1);
    }

    public AdjustableStack(Class<T> c, int size) {
        this.c = c;
        this.array = (T[]) Array.newInstance(c, size);
        this.N = 0;
    }

    private void adjust(int size){
        T[] temp = (T[]) Array.newInstance(c, size);
        int length = size > array.length ? array.length : size;
        for(int i = 0; i < length; i++){
            temp[i] = array[i];
        }
        array = temp;
    }

    public T pop() {
        int length = array.length;
        T value = array[--N];
        array[N] = null;
        // Use 1/4 so that some elements can still push and pop between 1/4 to 1/2 space
        if(N > 0 && N == length/4){
            adjust(length/2);
        }

        return value;
    }

    public void push(T value) {
        int length = array.length;
        if(N == length){
            adjust(length * 2);
        }
        array[N++] = value;
    }

    public Iterator<T> iterator(){
        return new ReverseArrayIterator();
    }

    private class ReverseArrayIterator implements Iterator<T>{
        private int i = N;

        @Override
        public boolean hasNext() {
            return i > 0;
        }

        @Override
        public T next() {
            return array[--i];
        }
    }

    @Override
    public String toString() {
        StringBuilder stringBuilder = new StringBuilder();
        for(int i = 0; i < array.length; i++){
            stringBuilder.append(array[i]);
            if(i != array.length - 1){
                stringBuilder.append(",");
            }
        }
        return stringBuilder.toString();
    }
}
