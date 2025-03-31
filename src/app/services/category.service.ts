import { Category } from './../models/category';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  categories : Category[] = []

   // Création de la function getOne
     getOne(id: number):Category | undefined {
     return this.categories.find(categorie => categorie.id == id)
     }


     //Affichage avec fetch pour les api
     async all():Promise<Category[]>{
       let rep = await fetch('http://127.0.0.1:8000/api/categories', {
         method: "GET",
         headers: {
           'Content-Type': 'application/json'
         }
         // headers : {"authorization" : "Bearer " + localStorage.getItem("token")}
         }) .then(res => res.json())

       return rep

     }

     async storeCategory(name: string, description: string): Promise<Category> {
      const categoryData = {
        name: name,
        description: description
      };

      const response = await fetch('http://127.0.0.1:8000/api/categories', {
        method: 'POST',
        body: JSON.stringify(categoryData),
        headers: {
          'Content-Type': 'application/json'
        }
      });

      if (!response.ok) {
        throw new Error('Erreur lors de la création de la catégorie');
      }


      return await response.json();
    }


    async getArticlebyCategory(id: number):Promise<Category>{
      let rep = await fetch(`http://127.0.0.1:8000/api/categories/${id}`,{
        method: "GET",
        headers: {
          'Content-Type': 'application/json'
        }
      }

      ).then(reponse => reponse.json())
      // console.log(rep)
      return rep;
    }


}
