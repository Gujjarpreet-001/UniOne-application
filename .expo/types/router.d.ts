/* eslint-disable */
import * as Router from 'expo-router';

export * from 'expo-router';

declare module 'expo-router' {
  export namespace ExpoRouter {
    export interface __routes<T extends string | object = string> {
      hrefInputParams: { pathname: Router.RelativePathString, params?: Router.UnknownInputParams } | { pathname: Router.ExternalPathString, params?: Router.UnknownInputParams } | { pathname: `/onboarding`; params?: Router.UnknownInputParams; } | { pathname: `/_sitemap`; params?: Router.UnknownInputParams; } | { pathname: `/Utils/colors`; params?: Router.UnknownInputParams; } | { pathname: `/components/gradient_button`; params?: Router.UnknownInputParams; } | { pathname: `/components/gradient_text`; params?: Router.UnknownInputParams; } | { pathname: `/screens/landing_page`; params?: Router.UnknownInputParams; } | { pathname: `/+not-found`, params: Router.UnknownInputParams & {  } };
      hrefOutputParams: { pathname: Router.RelativePathString, params?: Router.UnknownOutputParams } | { pathname: Router.ExternalPathString, params?: Router.UnknownOutputParams } | { pathname: `/onboarding`; params?: Router.UnknownOutputParams; } | { pathname: `/_sitemap`; params?: Router.UnknownOutputParams; } | { pathname: `/Utils/colors`; params?: Router.UnknownOutputParams; } | { pathname: `/components/gradient_button`; params?: Router.UnknownOutputParams; } | { pathname: `/components/gradient_text`; params?: Router.UnknownOutputParams; } | { pathname: `/screens/landing_page`; params?: Router.UnknownOutputParams; } | { pathname: `/+not-found`, params: Router.UnknownOutputParams & {  } };
      href: Router.RelativePathString | Router.ExternalPathString | `/onboarding${`?${string}` | `#${string}` | ''}` | `/_sitemap${`?${string}` | `#${string}` | ''}` | `/Utils/colors${`?${string}` | `#${string}` | ''}` | `/components/gradient_button${`?${string}` | `#${string}` | ''}` | `/components/gradient_text${`?${string}` | `#${string}` | ''}` | `/screens/landing_page${`?${string}` | `#${string}` | ''}` | { pathname: Router.RelativePathString, params?: Router.UnknownInputParams } | { pathname: Router.ExternalPathString, params?: Router.UnknownInputParams } | { pathname: `/onboarding`; params?: Router.UnknownInputParams; } | { pathname: `/_sitemap`; params?: Router.UnknownInputParams; } | { pathname: `/Utils/colors`; params?: Router.UnknownInputParams; } | { pathname: `/components/gradient_button`; params?: Router.UnknownInputParams; } | { pathname: `/components/gradient_text`; params?: Router.UnknownInputParams; } | { pathname: `/screens/landing_page`; params?: Router.UnknownInputParams; } | `/+not-found${`?${string}` | `#${string}` | ''}` | { pathname: `/+not-found`, params: Router.UnknownInputParams & {  } };
    }
  }
}
