import { FaJava } from "react-icons/fa";

export function Java() {
    return (
        <div className="h-full flex flex-col items-center gap-7 text-white p-4">
            <div className="flex justify-center items-center w-full gap-3 text-2xl md:text-5xl py-8">
                <FaJava />
                <h3 className="font-bold">Java</h3>
            </div>
            <div className="flex flex-col h-auto w-full">
                <div className="flex flex-col gap-8 md:grid md:grid-cols-2 md:grid-rows-3 border-t pt-10">
                    <div className="flex flex-col gap-3">
                        <h4 className="md:text-xl font-medium">
                            💬・Proficient:{" "}
                        </h4>
                        <p>
                            In-depth mastery of the Java language with solid
                            experience in developing robust, scalable
                            applications.
                        </p>
                    </div>
                    <div className="flex flex-col gap-3">
                        <h4 className="md:text-xl font-medium">
                            💻・Microservices development:
                        </h4>
                        <p>
                            Implementation of microservices-based architectures
                            using Spring Boot and Spring Cloud. These
                            architectures decompose the application into small
                            autonomous services that interact via RESTful APIs.
                            I&apos;ve worked on projects where microservices
                            have ensured scalability, resilience and rapid
                            deployment.
                        </p>
                    </div>
                    <div className="flex flex-col gap-3">
                        <h4 className="md:text-xl font-medium">
                            🚀・Inventory Management Application:
                            (Microservices)
                        </h4>
                        <p>
                            Designed and developed a Java application for
                            inventory management, integrating an intuitive user
                            interface and a relational database for information
                            storage.
                        </p>
                    </div>
                    <div className="flex flex-col gap-3">
                        <h4 className="md:text-xl font-medium">
                            🗄️・RESTful API with Spring Boot:
                        </h4>
                        <p>
                            Developed a RESTful API using the Spring Boot
                            framework to serve data to a front-end application.
                            Implemented JWT authentication and integrated with
                            databases such as MySQL.
                        </p>
                    </div>
                    <div className="flex flex-col gap-3">
                        <h4 className="md:text-xl font-medium">
                            🧮・J2EE and Application Servers:
                        </h4>
                        <p>
                            Experience in developing J2EE applications and
                            deploying them on application servers such as Tomcat
                            and WildFly.
                        </p>
                    </div>
                </div>
                <div className="flex flex-col gap-8 border-t pt-10">
                    <div className="flex flex-col gap-3">
                        <h4 className="md:text-xl font-medium">
                            📥・Tools and libraries:
                        </h4>
                        <p className="mb-5">
                            Used popular libraries such as Hibernate for ORM,
                            Maven for dependency management and JUnit for unit
                            testing.
                        </p>
                    </div>
                    <div className="flex flex-col gap-5 md:grid md:grid-cols-2 md:grid-rows-4">
                        <p>
                            <span className="font-bold">
                                🛠️・Service Discovery with Eureka:
                            </span>{" "}
                            Utilized Netflix Eureka for service discovery,
                            ensuring smooth and dynamic communication between
                            microservices.
                        </p>
                        <p>
                            <span className="font-bold">
                                🛠️・Load Balancing with Ribbon:
                            </span>{" "}
                            Implemented Ribbon for balancing the load among
                            microservice instances, optimizing performance and
                            availability.
                        </p>
                        <p>
                            <span className="font-bold">
                                🛠️・API Gateway with Zuul:
                            </span>{" "}
                            Employed Zuul to provide a unified gateway for
                            requests, ensuring security, monitoring, and dynamic
                            routing.
                        </p>
                        <p>
                            <span className="font-bold">
                                🛠️・Circuit Breaker with Hystrix:
                            </span>{" "}
                            Implemented Hystrix to ensure the resilience of
                            microservices against failures by isolating failure
                            points and providing fallback mechanisms.
                        </p>
                        <p>
                            <span className="font-bold">
                                🛠️・Config Server:{" "}
                            </span>
                            Used Spring Cloud Config Server to centralize
                            external configurations for services across
                            different environments.
                        </p>
                        <p>
                            <span className="font-bold">
                                🛠️・Tracing with Sleuth and Zipkin:
                            </span>{" "}
                            Adopted Sleuth and Zipkin for distributed tracing,
                            allowing for the monitoring and diagnosis of issues
                            in a microservices environment.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
