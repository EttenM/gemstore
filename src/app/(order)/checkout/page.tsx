import CheckoutForm from "@/src/shared/components/ui/checkout/checkout-form";
import Container from "@/src/shared/components/ui/Container";

export default function CheckOutHome() {
  return (
    <Container className="xl:w-[600px] mx-auto mt-[35px] mb-[30px]">
      <CheckoutForm />
    </Container>
  );
}
