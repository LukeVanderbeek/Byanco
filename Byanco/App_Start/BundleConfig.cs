using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Optimization;

namespace Byanco
{
    public class BundleConfig
    {
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new ScriptBundle("~/bundles/AppScripts").Include(
                "~/Scripts/*.js",
                "~/Content/Libraries/*.js"
            ));

            bundles.Add(new StyleBundle("~/bundles/AppCSS").Include(
                "~/Content/*.css"
            ));
        }
    }
}