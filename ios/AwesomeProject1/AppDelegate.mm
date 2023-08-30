#import "AppDelegate.h"
#import <Firebase.h>
#import <AuthenticationServices/AuthenticationServices.h>
#import <SafariServices/SafariServices.h>
#import <FBSDKCoreKit/FBSDKCoreKit-swift.h>
#import <GoogleMaps/GoogleMaps.h>
#import <React/RCTBundleURLProvider.h>

@implementation AppDelegate

- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions
{
  //firebase 
  [FIRApp configure];
  //Map key
  [GMSServices provideAPIKey:@"AIzaSyB4uOPrlEUJjx-tCcPm7BY5fn1gLwtB4BA"];
  //firebase facebookSDK
  [[FBSDKApplicationDelegate sharedInstance] application:application
                         didFinishLaunchingWithOptions:launchOptions];

  self.moduleName = @"AwesomeProject1";
  // You can add your custom initial props in the dictionary below.
  // They will be passed down to the ViewController used by React Native.
  self.initialProps = @{};
  return [super application:application didFinishLaunchingWithOptions:launchOptions];
}


- (NSURL *)sourceURLForBridge:(RCTBridge *)bridge
{
#if DEBUG
  return [[RCTBundleURLProvider sharedSettings] jsBundleURLForBundleRoot:@"index"];
#else
  return [[NSBundle mainBundle] URLForResource:@"main" withExtension:@"jsbundle"];
#endif
}

@end
