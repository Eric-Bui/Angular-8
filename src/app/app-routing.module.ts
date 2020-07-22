import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./components/pages/home/home.component";
import { SignupComponent } from "./components/pages/signup/signup.component";

const routes: Routes = [
	{
		path: "",
		component: HomeComponent,
	},
	{
		path: "signup",
		component: SignupComponent,
	},
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
