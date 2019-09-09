package nicholaslie.mhwguidewiki;

import android.app.Application;
import android.util.Log;

import com.AlexanderZaytsev.RNI18n.RNI18nPackage;
import com.facebook.react.shell.MainReactPackage;
import im.shimo.react.prompt.RNPromptPackage;
import com.idehub.Billing.InAppBillingBridgePackage;
import com.learnium.RNDeviceInfo.RNDeviceInfo;
import com.reactnative.photoview.PhotoViewPackage;
import com.reactnativecommunity.webview.RNCWebViewPackage;

import com.facebook.react.PackageList;
import com.facebook.hermes.reactexecutor.HermesExecutorFactory;
import com.facebook.react.bridge.JavaScriptExecutorFactory;
import com.facebook.react.ReactApplication;
import com.sbugert.rnadmob.RNAdMobPackage;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.soloader.SoLoader;


import java.util.Arrays;
import java.util.List;

public class MainApplication extends Application implements ReactApplication {

    private final ReactNativeHost mReactNativeHost = new ReactNativeHost(this) {
        @Override
        public boolean getUseDeveloperSupport() {
            return BuildConfig.DEBUG;
        }

        @Override
        protected List<ReactPackage> getPackages() {
//            @SuppressWarnings("UnnecessaryLocalVariable")
//            List<ReactPackage> packages = new PackageList(this).getPackages();
            // Packages that cannot be autolinked yet can be added manually here, for example:
            // packages.add(new MyReactNativePackage());
//            packages.add(new MainReactPackage(),
//            new RNAdMobPackage();
//            packages.add(new RNCWebViewPackage());
//            packages.add(new RNPromptPackage());
//            packages.add(new RNDeviceInfo());
//            packages.add(new RNI18nPackage());
//            packages.add(new PhotoViewPackage());
//            packages.add(new InAppBillingBridgePackage());
//            packages.add(new InAppBillingBridgePackage("MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAoDSG04oLa5KhBnl7DmMd9dkSy7AX6v98ABDD3pFzSckyxYGio0yQTPBvPBeL/RQVc2fJHYLHU7RZWqS8NaYCihc/U1Ui+a7dIS7g9fGQtxXT9czTWfHFElt71HZB0sRX8C//P9McPBXUOzwzJmM6ybjHnm4oCny5Vy3LYREcon5ad5hfRvNlJLxoQQrHB8+JfQRuLmSE+Z7S6X3fNpfBiQCLd/5qZ4hO+5ahV+Vg3io4k8ZK4EuzqPZ0jPV9fdkG6jAKs3XxB6FQHdmlIlk7bg1o+xS84p8GbcA26G0pm2zP0H4qZGTrk05SZbvXyX7zo2rJzRZrHEnJuLk+1M06bQIDAQAB"));
//            packages.add(new RNAdMobPackage());
//            return packages;
            return Arrays.<ReactPackage>asList(
                    new MainReactPackage(),
                    new RNCWebViewPackage(),
                    new RNPromptPackage(),
                    new RNAdMobPackage(),
                    new RNDeviceInfo(),
                    new RNI18nPackage(),
                    new PhotoViewPackage(),
//                    new InAppBillingBridgePackage(),
                    new InAppBillingBridgePackage("MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAoDSG04oLa5KhBnl7DmMd9dkSy7AX6v98ABDD3pFzSckyxYGio0yQTPBvPBeL/RQVc2fJHYLHU7RZWqS8NaYCihc/U1Ui+a7dIS7g9fGQtxXT9czTWfHFElt71HZB0sRX8C//P9McPBXUOzwzJmM6ybjHnm4oCny5Vy3LYREcon5ad5hfRvNlJLxoQQrHB8+JfQRuLmSE+Z7S6X3fNpfBiQCLd/5qZ4hO+5ahV+Vg3io4k8ZK4EuzqPZ0jPV9fdkG6jAKs3XxB6FQHdmlIlk7bg1o+xS84p8GbcA26G0pm2zP0H4qZGTrk05SZbvXyX7zo2rJzRZrHEnJuLk+1M06bQIDAQAB")
            );
        }

        @Override
        protected String getJSMainModuleName() {
            return "index";
        }
    };

    @Override
    public ReactNativeHost getReactNativeHost() {
        return mReactNativeHost;
    }

    @Override
    public void onCreate() {
        super.onCreate();
        SoLoader.init(this, /* native exopackage */ false);
    }
}
