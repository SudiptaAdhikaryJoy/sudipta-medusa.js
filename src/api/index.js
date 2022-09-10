import { Router } from "express"
import cors from "cors"
import Medusa from "@medusajs/medusa-js"
import { projectConfig } from "../../medusa-config"
import authenticate from "@medusajs/medusa/dist/api/middlewares/authenticate-customer"
import { async } from "@medusajs/medusa-cli/dist/commands/new"

export default () => {
    const router = Router()

    const corsOptions = {
        origin: projectConfig.store_cors.split(","),
        credentials: true,
    }
    const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
    router.get("/admin/collections", cors(corsOptions), authenticate(), async (req, res) => {
        // const id = req.user.customer_id;
        
        // const customerService = req.scope.resolve("customerService")

        // const customer = await customerService.retrieve(id)
    })
        medusa.auth.authenticate({
            email: 'user@example.com',
            password: 'user@example.com'
        })
            .then(({ customer }) => {
                console.log(customer.id);
            });
        medusa.admin.collections.retrieve(collection_id)
            .then(({ collection, limit, offset, count }) => {
                console.log(collection.id);
                res.json({
                    collection,
                    limit,
                    offset,
                    count
                });
            });
        

    router.get("/admin/discounts", cors(corsOptions), authenticate(), async (req, res) => {
        // const id = req.user.customer_id;

        // const customerService = req.scope.resolve("customerService")

        // const customer = await customerService.retrieve(id)
        medusa.auth.authenticate({
            email: 'user@example.com',
            password: 'user@example.com'
        })
            .then(({ customer }) => {
                console.log(customer.id);
            });
        medusa.admin.discounts.list()
            .then(({ discounts, limit, offset, count }) => {
                res.json({
                    discounts,
                    limit,
                    offset,
                    count
                });
            });

    });

    
    
    // must be previously logged in or use api token
    


    return router
}