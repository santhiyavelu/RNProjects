package com.awesomeproject1;
import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import java.util.Map;
import java.util.HashMap;
import android.util.Log;
import android.widget.Toast;


public class CalendarModule extends ReactContextBaseJavaModule {
    CalendarModule(ReactApplicationContext context) {
        super(context);
    }
// add to CalendarModule.java
@Override
public String getName() {
   return "CalendarModule";
}

@ReactMethod
public void createCalendarEvent(String name, String location) {
     // Combine name and location into a single string
    String message = "Event: " + name + "\nLocation: " + location;

    // Create a Toast and display it
    Toast.makeText(this.getReactApplicationContext(), message, Toast.LENGTH_SHORT).show();
}

// @ReactMethod(isBlockingSynchronousMethod = true)
}

