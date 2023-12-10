import conf from "../conf/conf"

import { Client, ID, Databases, Storage, Query } from "appwrite"
export class Service {
  client = new Client()
  databases
  bucket

  constructor() {
    this.client.setEndpoint(conf.appwriteURL).setProject(conf.appwriteProjectId)
    this.databases = new Databases(this.client)
    this.bucket = new Storage(this.client)
  }

  async createPost({ title, slug, content, fetaureImage, status, userId }) {
    try {
      return await this.databases.createDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        slug,
        {
          title,
          content,
          fetaureImage,
          status,
          userId,
        }
      )
    } catch (error) {
      console.log("Appwrite Service :: createPost ::  ", error)
    }
  }

  async updatePost(slug, { title, content, fetaureImage, status }) {
    try {
      return await this.databases.updateDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        slug,
        {
          title,
          content,
          fetaureImage,
          status,
        }
      )
    } catch (error) {
      console.log("Appwrite service:: updatePost::", error)
    }
  }

  async deletePost(slug) {
    try {
      await this.databases.deleteDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        slug
      )
      return true
    } catch (error) {
      console.log("Appwrite service:: deletePost::", error)
      return false
    }
  }

  async getPost(slug) {
    try {
      return await this.databases.getDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        slug
      )
    } catch (error) {
      console.log("Appwrite service:: getPost::", error)
    }
  }

  async getAllPosts(queries = [Query.equal("status", "active")]) {
    try {
      return await this.databases.listDocuments(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        queries
      )
    } catch (error) {
      console.log("Appwrite service:: getAllPosts::", error)
    }
  }

  // file upload service

  async uploadFile(file) {
    try {
      return await this.bucket.createFile(
        conf.appwriteBucketId,
        ID.unique(),
        file
      )
    } catch (error) {
      console.log("Appwrite service:: uploadFile::", error)
      return false
    }
  }

  async deleteFile(fileId) {
    try {
      await this.bucket.deleteFile(conf.appwriteBucketId, fileId)
    } catch (error) {
      console.log("Appwrite service:: deleteFile::", error)
      return false
    }
  }

  getfilePreview(fileId) {
    return this.bucket.getFilePreview(conf.appwriteBucketId, fileId)
  }
}

const service = new Service()
export default service