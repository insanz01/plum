import { RadSideDrawer } from 'nativescript-ui-sidedrawer';
import * as app from 'tns-core-modules/application';
import { EventData } from 'tns-core-modules/data/observable';
import { NavigatedData, Page } from 'tns-core-modules/ui/page';

import { CardListViewModel } from './cardlist-view-model';

export function onNavigatingTo(args: NavigatedData) {
  const page = <Page>args.object;
  page.bindingContext = new CardListViewModel();
}

export function onDrawerButtonTap(args: EventData) {
  const sideDrawer = <RadSideDrawer>app.getRootView();
  sideDrawer.showDrawer();
}
