import MainLayout from '../components/layout-component';
import HomePage from '../components/Home/index';
import RecipesPage from '../components/recipes/index';
import OurHistoryPage from '../components/History/index';
import RecipesList from '../components/RecipesList/index';

export const routes = [
    {
        name: 'main', path: '', component: MainLayout,
        children: [
            {
                name: 'home',
                path: "/",
                component: HomePage
            },
            {
                name: 'Recipes',
                path: "/recipes",
                component: RecipesPage
            },
            {
                name: 'History',
                path: "/our-history",
                component: RecipesList
            },
            {
                name: 'OurList',
                path: "/our-list",
                component: OurHistoryPage
            }
        ]
    }
];
